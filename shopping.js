"use strict";

(function () {
    function Product(name, price, expDate) {
        this.id = Math.random();
        this.name = name;
        this.price = parseFloat(price);
        this.expirationDate = new Date(expDate);
        this.getInfo = function () {
            var firstLetter = this.name[0].toUpperCase()
            var lastLetter = this.name[name.length - 1].toUpperCase();
            return firstLetter + lastLetter + id + ", " + this.name + ", " + this.price;


        }

    }

    function ShoppingBag() {
        this.listOfProducts = []
        this.addProduct = function (product) {
            if (!product instanceof Product && !product) {
                console.log("Expiration date is not valid")
            }
            this.listOfProducts.push(product);
        }

        this.averagePrice = function () {
            var totalPrice = 0;
            var numberOfProducts = this.listOfProducts.length
            this.listOfProducts.forEach(function (product) {
                totalPrice += product.price;
                var avg = totalPrice / this.listOfProducts.length;
            })
                return parseFloat(avg.toFixed(3));
            }
        }

        if (product.expirationDate.getTime > new Date()) {
            this.listOfProducts.push(product)
        } else {
            console.log("Product has expired");
        }

        this.getMostExpensive = function () {
            var sortedProduct = this.listOfProducts.slice();
           sortedProduct.sort(function(currentProduct, nextProduct) {
               return currentProduct.price - nextProduct.price

        })
            var getMostExpensive = newCopyArr[newCopyArr.length - 1];
            return mostExpensive.getInfo();
        }
        var calculateTotalPrice = function () {
            var sum = 0;
            this.listOfProducts.forEach(function (product) {
                sum += product.price
            });

            return sum;
        }
    }

    function PaymentCard(balance, validDate) {
        this.balance = number.parseFloat(balance.toFixed());
        this.expDate = new Date(validDate)
    }

    function statusOfPaymentCard() {
        if (PaymentCard.validDate.getTime < Date.now()) {
            console.log("Invalid PaymentCard");
        }
    }


    function CheckOutAndBuy(ShoppingBag, PaymentCard) {
        if (!PaymentCard.status) {
            console.log("Inactive status");
        }
        

    }

    console.log("Hi");
})()