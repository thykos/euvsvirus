import fakeCase from '../helpers/fakeCase';
const lsProgress = window.localStorage.getItem('progress');
const initialProgress = {
  sectionId: null,
  checkedSections: [],
  answers: {}
};

const initialState = {
  item: fakeCase,
  progress: lsProgress ? JSON.parse(lsProgress) : initialProgress
};

const START_CASE = 'case/start';
const SET_SECTION = 'case/set_section';
const SET_CHECKED = 'case/set_checked';
const SET_ANSWER = 'case/set_answer';

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

    case SET_CHECKED: {
      const newProgress = {
        ...state.progress,
        checkedSections: action.payload
      };
      window.localStorage.setItem('progress', JSON.stringify(newProgress));
      return {
      ...state,
        progress: newProgress
      }
    }

    case SET_ANSWER: {
      const newProgress = {
        ...state.progress,
        answers: {
          ...state.progress.answers,
          [action.payload.sectionId]: {
            [action.payload.partId]: action.payload.answer
          }
        }
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
    type: SET_SECTION,
    payload: id
  }
}

export function setChecked(array) {
  return {
    type: SET_CHECKED,
    payload: array
  }
}

export function setAnswer(payload) {
  return {
    type: SET_ANSWER,
    payload
  }
}

export default caseData;
