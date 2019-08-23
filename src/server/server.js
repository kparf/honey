import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import logger from 'koa-logger';
import ssr from './ssr';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  const html = await ssr(`${ctx.protocol}://${ctx.host}/index.html`);
  ctx.body = html;
});


app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(`${__dirname}/dist`));

app.listen(3000);