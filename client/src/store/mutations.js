
const mutations = {
  SET_CONTENT:(state,content)=>{

    state.content = content
    localStorage.setItem("content", content);
  },
  SET_TITLE:(state,title)=>{
    state.title = title
    localStorage.setItem("title", title);
  }
}
export default mutations
