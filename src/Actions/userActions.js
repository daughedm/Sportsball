const addUserToStore = (user) => {
  return {
    type: 'ADD_USER',
    user_id: user.user_id,
    userName: user.userName
  }
}

const removeUserFromStore = (user) => {
  return {
    type: 'REMOVE_USER'
  }
}

export {
  addUserToStore,
  removeUserFromStore
}