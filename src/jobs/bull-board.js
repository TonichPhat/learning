const { ExpressAdapter } = require('@bull-board/express');
const { createBullBoard } = require('@bull-board/api');
const { BullAdapter } = require('@bull-board/api/bullAdapter');
const { testJobProducer } = require('./test-job/testJob.producer');

const bullBoardServerAdapter = new ExpressAdapter();
bullBoardServerAdapter.setBasePath('/bull');

const { addQueue, removeQueue, replaceQueues, setQueues } = createBullBoard({
  queues: [new BullAdapter(testJobProducer)],
  serverAdapter: bullBoardServerAdapter,
  options: {
    uiConfig: {
      boardTitle: 'Testing Board',
      miscLinks: [{ text: 'Logout', url: '/logout' }],
    },
  },
});

module.exports = bullBoardServerAdapter.getRouter();
