import app from 'flarum/admin/app';

app.initializers.add('neoncube-private-messages', () => {
  app.extensionData
    .for('neoncube-private-messages')
    .registerSetting({
      setting: 'neoncube-private-messages.return_key',
      type: 'bool',
      label: app.translator.trans('neoncube-private-messages.admin.settings.return_key'),
      help: app.translator.trans('neoncube-private-messages.admin.settings.return_key_help')
    })
    // .registerSetting({
    //   setting: 'neoncube-private-messages.show_read_receipts',
    //   type: 'bool',
    //   label: app.translator.trans('neoncube-private-messages.admin.settings.show_read_receipts'),
    //   help: app.translator.trans('neoncube-private-messages.admin.settings.show_read_receipts_help')
    // })
    // .registerSetting({
    //   setting: 'neoncube-private-messages.message_recipient_background_color',
    //   type: 'color',
    //   label: app.translator.trans('neoncube-private-messages.admin.settings.message_recipient_background_color'),
    //   help: app.translator.trans('neoncube-private-messages.admin.settings.message_recipient_background_color_help')
    // })
    .registerPermission(
      {
        icon: 'fas fa-user-lock',
        label: app.translator.trans('neoncube-private-messages.admin.permissions.start_label'),
        permission: 'startConversation',
      },
      'start'
    )
    .registerPermission(
      {
        icon: 'fas fa-user-lock',
        label: app.translator.trans('neoncube-private-messages.admin.permissions.allow_users_to_receive_email_notifications'),
        permission: 'neoncube-private-messages.allowUsersToReceiveEmailNotifications',
      },
      'start'
    );
});
