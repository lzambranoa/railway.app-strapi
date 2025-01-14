export default {
    routes: [
      {
        method: 'POST',
        path: '/requests/send',
        handler: 'api::request.request.sendRequest',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  