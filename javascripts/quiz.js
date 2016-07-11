"use strict";

let Model = require("./model");
let $ = require("jquery");

// document ready
$(() => {

  let newRobotOne = null;
  let newRobotTwo = null;

  // build robot one
  $("#selectRobotOne").change(() => {
    let R1Select = $("#selectRobotOne").val();
    let p1Name = $("#playerOneName").val();
    if (R1Select === "stealthDrone") {
      newRobotOne = new Model.Stealth();
    } else if (R1Select === "tacoDrone") {
      newRobotOne = new Model.Taco();
    } else if (R1Select === "stomperBipedal") {
      newRobotOne = new Model.Stomper();
    } else if (R1Select === "looperBipedal") {
      newRobotOne = new Model.Looper();
    } else if (R1Select === "redneckATV") {
      newRobotOne = new Model.Redneck();
    } else if (R1Select === "scooterATV") {
      newRobotOne = new Model.Scooter();
    }
    newRobotOne.name = p1Name;
    console.log(newRobotOne);
  });

  // build robot two
  // why isn't looper bipedal working to be selected?
  $("#selectRobotTwo").change(() => {
    let R2Select = $("#selectRobotTwo").val();
    let p2Name = $("#playerTwoName").val();
    if (R2Select === "stealthDrone") {
      newRobotTwo = new Model.Stealth();
    } else if (R2Select === "tacoDrone") {
      newRobotTwo = new Model.Taco();
    } else if (R2Select === "stomperBipedal") {
      newRobotTwo = new Model.Stomper();
    } else if (R2Select === "looperBipedal") {
      newRobotTwo = new Model.Looper();
    } else if (R2Select === "redneckATV") {
      newRobotTwo = new Model.Redneck();
    } else if (R2Select === "scooterATV") {
      newRobotTwo = new Model.Scooter();
    }
    newRobotTwo.name = p2Name;
    console.log(newRobotTwo);
  });

  $("#attackBtn").click(() => {
    fight();
    console.log("fight button clicked");
  });

  function fight() {
    newRobotOne.health = newRobotOne.health - newRobotTwo.attack;
    console.log("new robot one health", newRobotOne.health);
    if (newRobotOne.health < 1) {
      console.log("Robot one is dead");
    } else { 
      newRobotTwo.health = newRobotTwo.health - newRobotOne.attack;
      console.log("new robot two health", newRobotTwo.health);
      if (newRobotTwo.health < 1) {
        console.log("Robot two is dead");
      }
    }
  }


});