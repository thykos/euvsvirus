export default {
  name: 'Bob Dudley',
  avatar: 'url',
  organization: 'British Petroleum Group Chief Executive',
  messages: [
    {
      id: 'question-0',
      text: 'Our company faced a number of really serious incidents before I came to position. Do you want to know details?',
      replies: [
        {
          id: 'reply-0-0',
          text: 'Yes, tell me 🧐',
          action: 'NEXT_QUESTION',
        },
        {
          id: 'reply-0-1',
          text: 'Sounds interesting',
          action: 'NEXT_QUESTION'
        },
        {
          id: 'reply-0-2',
          text: 'No',
          action: 'ADDITIONAL_QUESTION',
          additionalMessage: {
            id: 'question-0-1',
            text: "Okay, won't take yours and mine time. But feel free to ask me, if you change your mind",
            replies: [
              {
                id: 'reply-0-1-0',
                text: 'Tell me, please 🤩',
                action: 'NEXT_QUESTION'
              },
            ],
        }
      }
    ],
  },
  {
    id: 'question-1',
    text: 'Do you know what is Deepwater Horizon?',
    replies: [
      {
        id: 'reply-1-0',
        text: 'Yes',
        action: 'NEXT_WITH_SKIP',
        additionalMessage: {
          id: 'additional-1-0',
          text: 'Good 🙌',
        }
      },
      {
        id: 'reply-1-1',
        text: 'Drilling station? 🤔',
        action: 'NEXT_QUESTION',
        additionalMessage: {
          id: 'additional-1-1',
          text: 'Yes ☺️',
        }
      },
      {
        id: 'reply-1-2',
        text: 'No, tell me please 😯',
        action: 'NEXT_QUESTION',
      }
    ],
  },
  {
    id: 'question-2',
    text: 'Deepwater Horizon was an ultra-deepwater, dynamically positioned, semi-submersible offshore drilling rig. It was build in 2001. Here how it looked: [[a href="https://drive.google.com/file/d/1gywjhT7phwqmkDSMm8JKrmSldM3Yx0Zj/view"]]Photo[[/a]]',
    replies: [
      {
        id: 'reply-2-0',
        text: 'Okay',
        action: 'NEXT_QUESTION',
      },
      {
        id: 'reply-2-1',
        text: 'Great, thanks',
        action: 'NEXT_QUESTION',
      },
      {
        id: 'reply-2-2',
        text: 'And what\'s next?',
        action: 'NEXT_QUESTION',
      },
    ],
  },
  {
    id: 'question-3',
    text: 'In April 2010 it exploded and killed 11 men under their stewardship. That put BP on the headlines of global news as a villain responsible for the largest environmental disaster in US history.',
    replies: [
      {
        id: 'reply-3-0',
        text: 'OMG! 😲',
        action: 'NEXT_QUESTION',
      },
      {
        id: 'reply-3-1',
        text: 'Terrible! 😲',
        action: 'NEXT_QUESTION',
      },
      {
        id: 'reply-3-2',
        text: 'How you deal with it? 😲',
        action: 'NEXT_QUESTION',
      },
    ],
  },
  {
    id: 'question-4',
    text: 'Of course, that was terrible. We did everything we could to helped families and people. But as a logical result, the BP stock price plunged in the aftermath and had only recently begun to regain earlier momentum.',
  },
  ],
}