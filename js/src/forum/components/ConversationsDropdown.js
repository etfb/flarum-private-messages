import app from 'flarum/forum/app';
import NotificationsDropdown from 'flarum/forum/components/NotificationsDropdown';
import ConversationsList from './ConversationsList';

export default class ConversationsDropdown extends NotificationsDropdown {
  static initAttrs(attrs) {
    attrs.label ||= app.translator.trans('neoncube-private-messages.forum.dropdown.tooltip');
    attrs.icon ||= 'fas fa-comment-alt';
    attrs.className = 'MessagesDropdown NotificationsDropdown';

    super.initAttrs(attrs);
  }

  onclick() {
    if (app.drawer.isOpen()) {
      this.goToRoute();
    }
  }

  getMenu() {
    return <form className={'Dropdown-menu ' + this.attrs.menuClassName}>{this.showing && <ConversationsList mobile={false} />}</form>;
  }

  goToRoute() {
    window.location.assign(app.route('conversations'));
  }

  getUnreadCount() {
    return app.session.user.unreadMessages();
  }

  getNewCount() {
    return this.getUnreadCount();
  }
}
