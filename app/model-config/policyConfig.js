const { validateUuid } = require("../utils/uuid");

const db = require("../../models");
const { validateStringLength } = require("../utils/string");
const { Op } = require("sequelize");

class PolicyConfig {
  constructor() {
    this.fieldMapping = Object.freeze({
      id: "id",
      insuranceType: "insuranceType",
      planName: "planName",
      dateCreated: "dateCreated",
      maturityDate: "maturityDate",
      primimumType: "primimumType",
      totalPremimumAmount: "totalPremimumAmount",
      profitRatio: "profitRatio",
      sumAssured: "sumAssured",
      requestStatus: "requestStatus",
      customer_id: "customer_id",
      agent_id: "agent_id",
      plan_id: "plan_id"
    });

    this.model = db.policy;
    this.modelName = db.policy.name;
    this.tableName = db.policy.tableName;
    this.filter = Object.freeze({
      id: (id) => {
        validateUuid(id);
        return {
          [this.fieldMapping.id]: {
            [Op.eq]: id,
          },
        };
      },
      agent_id: (agent_id) => {
        validateUuid(agent_id);
        return {
          [this.fieldMapping.agent_id]: {
            [Op.eq]: agent_id,
          },
        };
      },
      customer_id: (customer_id) => {
        validateUuid(customer_id);
        return {
          [this.fieldMapping.customer_id]: {
            [Op.eq]: customer_id,
          },
        };
      },
    });
  }
}
const policyConfig = new PolicyConfig();
module.exports = policyConfig;
