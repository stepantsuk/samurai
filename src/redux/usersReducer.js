import {userAPI} from './../api/api' ;

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followersInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followersInProgress: action.followingInProgress ?
          [...state.followersInProgress, action.userId]
          :
          state.followersInProgress.filter(id => id != action.userId),
      }
    default:
      return state;
  }
};

export let followSuccess = (userId) => ({ type: FOLLOW, userId });
export let unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export let setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export let toggleFollowingProgress = (followingInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId });

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  }
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,userId));
    userAPI.followUser(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      };
      dispatch(toggleFollowingProgress(false, userId));
    } );
  }
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,userId));
    userAPI.unfollowUser(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      };
      dispatch(toggleFollowingProgress(false, userId));
    } );
  }
};


/* верни в users все ниже для локально стейта если что
{ id: 1, photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgkUANhU439c2rqDbXSLDCivKS4yP52_STw&usqp=CAU', followed: true, firstName: 'Ivan', lastName: 'Ivanov', status: 'i am student', location: { city: 'Moscow', country: 'Russia' }, },
    { id: 2, photoURL:'https://habrastorage.org/storage2/93b/46f/a39/93b46fa39dd9f2c7a545ffbf571bd10d.jpg', followed: false, firstName: 'Petr', lastName: 'Petrov', status: 'i am musicant', location: { city: 'Voronezh', country: 'Russia' }, },
    { id: 3, photoURL:'https://cs-site.ru/uploads/posts/2020-09/1599772043_596.jpg', followed: true, firstName: 'Sidor', lastName: 'Sidorov', status: 'i am blogger', location: { city: 'Riga', country: 'Latvia' }, },
*/