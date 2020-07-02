// api call inside componentDidMount() hook


// componentDidMount= () => {
//   axios.get("https://api.imgflip.com/get_memes").then(res => {
//     const allMemeImgs = res.data.data.memes;

//     this.setState({ allMemeImgs }, () => {
//       console.log(this.state.allMemeImgs[0]);
//     });
//   });
// }