import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class ReviewableIpLookup extends Component {
  @service currentUser;

  get isNotReviewableUser() {
    const reviewable = this.args.outletArgs.reviewable;
    return reviewable.type != 'ReviewableUser';
  }
}
