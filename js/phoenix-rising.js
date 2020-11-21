
(function() {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    script.type = "text/javascript";

    var stripeScript = document.createElement("script");
    stripeScript.src = "https://js.stripe.com/v3";
    stripeScript.type = "text/javascript";

    script.onload = function() { // do jquery stuff here
        var $ = window.jQuery;

        $(document).ready(function(){
          $(".topic__comments[data-topic-id='174059']").closest(".topic--parent").hide();
          $(".topic__comments[data-topic-id='174059']").find(".topic__actions--reply").hide(); // hide reply button on upgrade topic
          $(".topic__comments[data-topic-id='174059']").closest('.topic').append(`
            <!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
            <button
              style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
              id="checkout-button-price_1HnuzqKl2A2CzdihIcxIoQAJ"
              role="link"
              type="button"
            >
              Checkout
            </button>

            <div id="error-message"></div>
          `);

          // stripe script snippet here
          var stripe = Stripe('pk_live_51HiRw1Kl2A2Czdiha1vwVUeOm7ToNWkCjbdvCVzgmMqkcOrsIF4CTO3a2EixGYNUkyzvWMny545lJQMP0fbzIeQT0074F4wQkn');

          var checkoutButton = document.getElementById('checkout-button-price_1HnuzqKl2A2CzdihIcxIoQAJ');
          if (checkoutButton) {
            checkoutButton.addEventListener('click', function () {
              // When the customer clicks on the button, redirect
              // them to Checkout.
              stripe.redirectToCheckout({
                lineItems: [{price: 'price_1HnuzqKl2A2CzdihIcxIoQAJ', quantity: 1}],
                mode: 'subscription',
                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfill-orders
                successUrl: 'https://phoenix-rising.circle.so/c/vip-welcome',
                cancelUrl: 'https://phoenix-rising.circle.so/c/community-guidelines/phoenix-elevated',
              })
              .then(function (result) {
                if (result.error) {
                  // If `redirectToCheckout` fails due to a browser or network
                  // error, display the localized error message to your customer.
                  var displayError = document.getElementById('error-message');
                  displayError.textContent = result.error.message;
                }
              });
            });
          }

          $('.sidebar__content').height(window.innerHeight - 140);

          if ($('.sidebar--right > .sidebar__content').children().length === 0) {
            $('.sidebar--left > .sidebar__content').css('visibility', 'visible');
          } else {
            $('.sidebar__content').css('visibility', 'visible');
          }

          $('.sidebar__content').css({
            backgroundColor: '#f7f9fb',
            marginTop: '20px',
            borderRadius: '4px',
            padding: '10px 5px 10px 10px'
          });
        });
    };
    document.getElementsByTagName("head")[0].appendChild(script);



})();
