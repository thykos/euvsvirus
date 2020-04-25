import fakeCase from '../helpers/fakeCase';
const lsProgress = window.localStorage.getItem('progress');
const initialProgress = {
  sectionId: null
};

const initialState = {
  item: fakeCase,
  progress: lsProgress ? JSON.parse(lsProgress) : initialProgress
};

const START_CASE = 'case/start';
const SET_SECTION = 'case/set_section';

const caseData = (state = initialState, action) => {
  switch (action.type) {
    case START_CASE: {
      const newProgress = {
        ...state.progress,
        sectionId: state.item.sections[0].id
      };
      window.localStorage.setItem('progress', JSON.stringify(newProgress));
      return {
      ...state,
        progress: newProgress
      }
    }

    case SET_SECTION: {
      const newProgress = {
        ...state.progress,
        sectionId: action.payload
      };
      window.localStorage.setItem('progress', JSON.stringify(newProgress));
      return {
      ...state,
        progress: newProgress
      }
    }

    default:
      return state
  }
};

export function onCaseStart() {
  return {
    type: START_CASE
  }
}

export function setSection(id) {
  return {
    type: START_CASE,
    payload: id
  }
}

export default caseData;
