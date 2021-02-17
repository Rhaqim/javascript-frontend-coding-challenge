import Autocomplete from './Autocomplete';
import usStates from './us-states';
import getGitHub from './ivan.js';
import './main.css';


// US States
const data = usStates.map(state => ({
  text: state.name,
  value: state.abbreviation
}));
new Autocomplete(document.getElementById('state'), {
  data,
  onSelect: (stateCode) => {
    console.log('selected state:', stateCode);
  },
});


// Github Users
const data_two = getGitHub.map(gh_user => ({
  text: gh_user.login
}));
new Autocomplete(document.getElementById('gh_user'), {
  data_two,
  onSelect: (ghUserId) => {
    console.log('selected github user id:', ghUserId);
  },
});
