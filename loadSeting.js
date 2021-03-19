let requestOnFetchingNum = 0
let endLoadingTimer = 0
let startLoadingTimer

const showLoading = () => {
  requestOnFetchingNum = requestOnFetchingNum < 0 ? 0 : requestOnFetchingNum
  requestOnFetchingNum++
  clearTimeout(startLoadingTimer)
  startLoadingTimer = setTimeout(() => {
    // 显示loading
  }, 500)
}

const hideLoading = () => {
  requestOnFetchingNum--
  clearTimeout(endLoadingTimer)
  endLoadingTimer = setTimeout(() => {
    if (requestOnFetchingNum <= 0) {
      clearTimeout(startLoadingTimer)
      // 影藏loading
      requestOnFetchingNum = 0
    }
  }, 50)
}
