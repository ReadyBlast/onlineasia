require('dotenv').config();

const { FileAdapter } = require('@grammyjs/storage-file');
const {
  Bot,
  GrammyError,
  HttpError,
  InlineKeyboard,
  session,
} = require('grammy');

const bot = new Bot(process.env.BOT_API_KEY);

bot.use(
  session({
    initial: () => ({
      canPassTest: true,
      questionOnePassed: false,
      questionTwoPassed: false,
      questionThreePassed: false,
      questionFourPassed: false,
      questionFivePassed: false,
      questionSixPassed: false,
      questionSevenPassed: false,
      questionEightPassed: false,
      questionNinePassed: false,
      questionTenPassed: false,
    }),
    storage: new FileAdapter({
      dirName: 'sessions',
    }),
  })
);

bot.command('start', async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text('Yes', 'question-2')
    .row()
    .text('Yeah, but with an interpreter.', 'question-2')
    .row()
    .text('No', 'failed');

  if (ctx.session.canPassTest === false) {
    await ctx.reply(
      `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
    );
  } else if (ctx.session.questionOnePassed) {
    await ctx.reply(`You're already answered that question.`);
  } else {
    await ctx.reply('Do you know the English language?', {
      reply_markup: inlineKeyboard,
    });
  }
});

bot.callbackQuery('question-2', async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text('Yes', 'question-3')
    .row()
    .text('No', 'failed');

  ctx.session.questionOnePassed = true;

  if (ctx.session.canPassTest === false) {
    await ctx.reply(
      `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
    );
  } else if (ctx.session.questionTwoPassed) {
    await ctx.reply(`You're already answered that question.`);
  } else {
    await ctx.reply('Do you have a google account?', {
      reply_markup: inlineKeyboard,
    });
  }

  await ctx.answerCallbackQuery({});
});

bot.callbackQuery('question-3', async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text('Less than 1 year', 'failed')
    .row()
    .text('From 1 to 4 years', 'question-4')
    .row()
    .text('More than 5 years', 'question-4');

  ctx.session.questionTwoPassed = true;

  if (ctx.session.canPassTest === false) {
    await ctx.reply(
      `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
    );
  } else if (ctx.session.questionThreePassed) {
    await ctx.reply(`You're already answered that question.`);
  } else {
    await ctx.reply('How long have you had the google account?', {
      reply_markup: inlineKeyboard,
    });
  }

  await ctx.answerCallbackQuery({});
});

bot.callbackQuery('question-4', async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text('Yes', 'question-5')
    .row()
    .text('No', 'failed');

  ctx.session.questionThreePassed = true;

  if (ctx.session.canPassTest === false) {
    await ctx.reply(
      `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
    );
  } else if (ctx.session.questionFourPassed) {
    await ctx.reply(`You're already answered that question.`);
  } else {
    await ctx.reply(
      'Do you know what cryptocurrency is and know how to accept payments in it?',
      {
        reply_markup: inlineKeyboard,
      }
    );
  }

  await ctx.answerCallbackQuery({});
});

bot.callbackQuery('question-5', async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text('Yes', 'question-6')
    .row()
    .text('No', 'failed');

  ctx.session.questionFourPassed = true;

  if (ctx.session.canPassTest === false) {
    await ctx.reply(
      `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
    );
  } else if (ctx.session.questionFivePassed) {
    await ctx.reply(`You're already answered that question.`);
  } else {
    await ctx.reply(
      'Do you have a sim card from a local Indonesian operator?',
      {
        reply_markup: inlineKeyboard,
      }
    );
  }

  await ctx.answerCallbackQuery({});
});

bot.callbackQuery('question-6', async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text('Yes', 'question-7')
    .row()
    .text('No', 'failed');

  ctx.session.questionFivePassed = true;

  if (ctx.session.canPassTest === false) {
    await ctx.reply(
      `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
    );
  } else if (ctx.session.questionSixPassed) {
    await ctx.reply(`You're already answered that question.`);
  } else {
    await ctx.reply('Do you have a bank card?', {
      reply_markup: inlineKeyboard,
    });
  }

  await ctx.answerCallbackQuery({});
});

bot.callbackQuery('question-7', async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text('12-18', 'failed')
    .row()
    .text('18- 23', 'failed')
    .row()
    .text('23-35', 'question-8')
    .row()
    .text('35 - 50', 'question-8');

  ctx.session.questionSixPassed = true;

  if (ctx.session.canPassTest === false) {
    await ctx.reply(
      `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
    );
  } else if (ctx.session.questionSevenPassed) {
    await ctx.reply(`You're already answered that question.`);
  } else {
    await ctx.reply(`What's your age?`, {
      reply_markup: inlineKeyboard,
    });
  }

  await ctx.answerCallbackQuery({});
});

bot.callbackQuery('question-8', async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text('Yes', 'question-9')
    .row()
    .text('No', 'failed');

  ctx.session.questionSevenPassed = true;

  if (ctx.session.canPassTest === false) {
    await ctx.reply(
      `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
    );
  } else if (ctx.session.questionEightPassed) {
    await ctx.reply(`You're already answered that question.`);
  } else {
    await ctx.reply('Do you have a personal computer or laptop?', {
      reply_markup: inlineKeyboard,
    });
  }

  await ctx.answerCallbackQuery({});
});

bot.callbackQuery('question-9', async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text('Yes', 'question-10')
    .row()
    .text('No', 'failed');

  ctx.session.questionEightPassed = true;

  if (ctx.session.canPassTest === false) {
    await ctx.reply(
      `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
    );
  } else if (ctx.session.questionNinePassed) {
    await ctx.reply(`You're already answered that question.`);
  } else {
    await ctx.reply('Do you have home internet with Wi-Fi?', {
      reply_markup: inlineKeyboard,
    });
  }

  await ctx.answerCallbackQuery({});
});

bot.callbackQuery('question-10', async (ctx) => {
  const inlineKeyboard = new InlineKeyboard()
    .text('TeamViewer', 'congratulations')
    .row()
    .text('Google Chrome', 'failed')
    .row()
    .text('Counter Strike Go', 'failed');

  ctx.session.questionNinePassed = true;

  if (ctx.session.canPassTest === false) {
    await ctx.reply(
      `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
    );
  } else if (ctx.session.questionTenPassed) {
    await ctx.reply(`You're already answered that question.`);
  } else {
    
    await ctx.reply(
      'Which is the right application for remote access to a computer?',
      {
        reply_markup: inlineKeyboard,
      }
    );
  }
  
  await ctx.answerCallbackQuery({});
});

bot.callbackQuery('congratulations', async (ctx) => {
  
  if (ctx.session.canPassTest == true && !ctx.session.questionTenPassed) {
    await ctx.reply(
      'Congratulations! You have passed the test and are one step closer to earning money online! Write to these contact details <a href="https://t.me/WorkAsiaSupport">@WorkAsiaSupport</a> the phrase - “I want to work with OnlineAsia!”',
      {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }
    );
    ctx.session.questionTenPassed = true;
  } else {
    await ctx.reply(`You're already answered that question.`);
  }

  await ctx.answerCallbackQuery({});
});

bot.callbackQuery('failed', async (ctx) => {
  await ctx.reply(
    `Thank you for taking the test. Unfortunately, we don't have any job offers for you.`
  );
  await ctx.answerCallbackQuery({});

  ctx.session.canPassTest = false;
});

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error('Error in request:', e.description);
  } else if (e instanceof HttpError) {
    console.error('Could not contact Telegram:', e);
  } else {
    console.error('Unknown error:', e);
  }
});

bot.start();
