const initState = {
  projects: [
    {id: 1, title: 'my first project', content: 'this is story of my pony'},
    {id: 2, title: 'my second project', content: 'story of my little pony'},
    {id: 3, title: 'my third project', content: 'this is what you told me'}
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;