const { v4 } = require("uuid");
const paymentDetailConfig = require("../../../model-config/paymentDetailConfig");
const { startTransaction } = require("../../../sequelize/transaction");
const { parseLimitAndOffset, unmarshalBody, parseSelectFields, parseFilterQueries } = require('../../../utils/request');


class PaymentDetailService {
  constructor() {}

  // async getAllPaymentDetails(settingsConfig) {
  //   const t = await startTransaction();
  //   try {
  //     const data = await paymentDetailConfig.model.findAndCountAll({
  //       transaction: t,
  //     });
  //     await t.commit();
  //     return data;
  //   } catch (error) {
  //     await t.rollback();
  //     throw error;
  //   }
  // }

  async getAllPaymentDetails(settingsConfig, queryParams) {
    const t = await startTransaction();
    try {
      const selectArray = {
        id: paymentDetailConfig.fieldMapping.id,
        installationDate: paymentDetailConfig.fieldMapping.installationDate,
        installationAmount: paymentDetailConfig.fieldMapping.installationAmount,
        paymentDate: paymentDetailConfig.fieldMapping.paymentDate,
        paymentStatus: paymentDetailConfig.fieldMapping.paymentStatus,
        paymentMethod: paymentDetailConfig.fieldMapping.paymentMethod,
        agentId: paymentDetailConfig.fieldMapping.agentId,
        policyId: paymentDetailConfig.fieldMapping.policyId,
      };
      const attributeToReturn = Object.values(selectArray);
      const includeQuery = queryParams.include || [];
      const logger = settingsConfig.logger;
      logger.info(`[Payment_SERVICE] : Inside getAllPaymet`);
      const data = await paymentDetailConfig.model.findAndCountAll({
        transaction: t,
        ...parseFilterQueries(queryParams, paymentDetailConfig.filter),
        attributes: attributeToReturn,
        ...parseLimitAndOffset(queryParams),
      });
      if (data == null) {
        throw new Error("Record Does Not Exists");
      }
      t.commit();
      return data;
    } catch (error) {
      t.rollback();
      throw error;
    }
  }

  async getPaymentDetailById(settingsConfig, paymentDetailId) {
    const t = await startTransaction();
    try {
      const data = await insuranceTypeConfig.model.findAndCountAll({
        transaction: t,
        id: paymentDetailId,
      });
      await t.commit();
      return data;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  async createPaymentDetail(settingsConfig, policyId, body) {
    console.log(body);
    const t = await startTransaction();
    try {
      const logger = settingsConfig.logger;
      logger.info(`[PaymentDetailService] : Inside createPaymentDetail`);

      body.id = v4();
      body.paymentDate = new Date();

      // body.agentId = agentId,
      body.policyId = policyId;

      const data = await paymentDetailConfig.model.create(body, {
        transaction: t,
      });

      await t.commit();
      return data;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
}

module.exports = PaymentDetailService;
