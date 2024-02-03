import { ElMessage, ElMessageBox } from 'element-plus'

const TYPE_SUCCESS = 'success'
const TYPE_ERROR = 'error'
const TYPE_WARNING = 'warning'

const useMessage = function() {
  const messageSuccess = (message:string) => {
    // implement
    ElMessage({
      type: TYPE_SUCCESS,
      message
    })
  }
  const messageError = function() {
    // implement 
    ElMessage({
      type: TYPE_ERROR,
      message
    })
  }
  const messageWarning = function() {
    // implement
    ElMessage({
      type: TYPE_WARNING,
      message
    })
  }
  const messageConfirm = function(message:string,title?:string): Promise<void> {
    // implement
    if(!title) title = 'Confirm'
    return  ElMessageBox.confirm(
      message,
      title,
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }
    )
  }
  return {
    messageConfirm,
    messageError,
    messageSuccess,
    messageWarning
  } 
}

export default useMessage;