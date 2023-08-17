import { action } from "@ember/object";
import IpLookup from "admin/components/ip-lookup";
import AdminUser from "admin/models/admin-user";
import { popupAjaxError } from "discourse/lib/ajax-error";

export default class ReviewQueueIpLookup extends IpLookup {
  @action
  async lookup() {
    if(this.ip == "init") {
      let userId = this.userId;
      try {
        let userInfo = await AdminUser.find(userId);
        this.set("ip", userInfo.ip_address);
      } catch(e) {
        popupAjaxError(e);
        return; // no need to go further in this case
      }
    }

    super.lookup(...arguments);
  }
}
