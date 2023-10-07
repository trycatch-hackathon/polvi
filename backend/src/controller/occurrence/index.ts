import { OccurenceService } from "../../service/occurrence";
import { BaseController } from "../@shared";

export class OccurrenceController extends BaseController {
  constructor() {
    var occurenceService = new OccurenceService();
    super(occurenceService);
  }
}
