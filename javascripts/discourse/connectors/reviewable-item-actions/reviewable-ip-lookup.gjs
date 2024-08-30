import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { and } from "truth-helpers";
import ReviewQueueIpLookup from "../../components/review-queue-ip-lookup";

export default class ReviewableIpLookup extends Component {
  @service currentUser;

  get isNotReviewableUser() {
    const reviewable = this.args.outletArgs.reviewable;
    return reviewable.type !== "ReviewableUser";
  }

  <template>
    {{#if
      (and
        @outletArgs.reviewable.target_created_by
        this.currentUser.staff
        this.isNotReviewableUser
      )
    }}
      <ReviewQueueIpLookup
        @ip="init"
        @userId={{@outletArgs.reviewable.target_created_by.id}}
      />
    {{/if}}
  </template>
}
