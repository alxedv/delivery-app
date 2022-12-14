import React from 'react';
import PropTypes from 'prop-types';
import formatOrderNumber from '../../../main/useCases/formatOrderNumber';

export default function OrderCard({
  index,
  saleID,
  saleStatus,
  saleDate,
  saleTotalPrice,
  saleAddress,
  saleAddressNumber,
  userRole,
}) {
  return (
    <div
      className="card-order"
    >
      <div className="card-order-box">

        <div className="order-id-box">
          <div>Pedido</div>
          <div
            data-testid={ `${userRole}_orders__element-order-id--${index + 1}` }
          >
            { formatOrderNumber(saleID) }
          </div>
        </div>

        <div
          className="status entregue-card"
          data-testid={ `${userRole}_orders__element-delivery-status--${index + 1}` }
        >
          {saleStatus}
        </div>

        <div className="data-n-price">
          <div
            className="data"
            data-testid={ `${userRole}_orders__element-order-date--${index + 1}` }
          >
            { saleDate }
          </div>
          <div className="data">
            R$
            <span data-testid={ `${userRole}_orders__element-card-price--${index + 1}` }>
              {saleTotalPrice.replace('.', ',')}
            </span>
          </div>
        </div>
        {saleAddress
          && (
            <div
              className="address-card"
              data-testid={ `${userRole}_orders__element-card-address--${saleID}` }
            >
              {`${saleAddress}, ${saleAddressNumber}`}
            </div>
          )}

      </div>
    </div>
  );
}

OrderCard.propTypes = {
  index: PropTypes.number.isRequired,
  saleID: PropTypes.number.isRequired,
  saleStatus: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  saleTotalPrice: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  saleAddress: PropTypes.string.isRequired,
  saleAddressNumber: PropTypes.string.isRequired,
};
