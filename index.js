const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const nat = document.querySelector("#nat");
const des = document.querySelector("#des");
const poosword = document.querySelector("#poosword");
const button = document.querySelector("#button");
const form = document.querySelector("#form");
const wrapper = document.querySelector("#wrapper");
const btn = document.querySelector("#btn");
function validate(name, surname, age, email, tel, nat, des, poosword) {
  // Isim kiritilishi shart
  if (!name.value) {
    alert("isim kiritilishi shart");
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "blue";
  }
  // Isim kamida uchta harfdan iborat bulishi shart
  if (name.value.trim().length < 3) {
    alert("isim kamida 3ta harfdan iborat bulishi shart");
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "blue";
  }
  // isim kamida 5ta harfdan iborat bulishi shart
  if (surname.value.trim().length < 5) {
    alert("isim kamida 3ta harfdan iborat bulishi shart");
    surname.focus();
    surname.style.outlineColor = "red";
    return false;
  } else {
    surname.style.outlineColor = "blue";
  }
  // Isim raqamdan boshlanmasligi kerak
  if (Number(name.value[0])) {
    alert("isim raqamdan boshlanmasligi kerak");
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "blue";
  }
  // Familyani tekshirish
  // familya kiritilishi shart
  if (!surname.value) {
    alert("familya kiritilishi shart");
    surname.focus();
    surname.style.outlineColor = "red";
    return false;
  } else {
    surname.style.outlineColor = "blue";
  }

  // familya raqamdan boshlanmasligi kerak
  if (Number(surname.value[0])) {
    alert("familya raqamdan boshlanmasligi kerak");
    surname.focus();
    surname.style.outlineColor = "red";
    return false;
  } else {
    surname.style.outlineColor = "blue";
  }
  // yoshga tekshirish
  // yosh kiritilishi shart
  if (!age.value) {
    alert("yosh kiritilishi shart");
    age.focus();
    age.style.outlineColor = "red";
    return false;
  } else {
    age.style.outlineColor = "blue";
  }

  // oraliqlarga tekshirish
  if (age.value <= 0 || age.value > 200) {
    alert("yosh 200yuzdan kata bumasligi kerak");
    age.focus();
    age.style.outlineColor = "red";
    return false;
  } else {
    age.style.outlineColor = "blue";
  }

  // emailni validatsiya qilish

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert("Sizning email notugri: ");
    email.focus();
    email.style.outlineColor = "red";
    return false;
  } else {
    // alert("siz kiritgan email tugri!");
    email.style.outlineColor = "blue";
  }

  if (tel.value.trim().length != 12) {
    alert("kiritilgan tel farmati notogri");
    tel.focus();
    tel.style.outlineColor = "red";
    return false;
  } else {
    tel.style.outlineColor = "blue";
  }
  const phoneRegex = /^\+998[0-9]{9}$/;
  if (!tel.value == phoneRegex) {
    alert("Telefon raqam kodi notogri");
    tel.focus();
    tel.style.outlineColor = "red";
    return false;
  } else {
    tel.style.outlineColor = "blue";
  }
  if (des.value.length >= 50) {
    alert("izoh  50ta harfdan kup bumasligi kerak");
    des.focus();
    des.style.outlineColor = "red";
    return false;
  } else {
    des.style.outlineColor = "blue";
  }
  if (Number(des.value)) {
    alert("raqam kiritmang");
    return false;
  } else {
    des.style.outlineColor = "blue";
  }
  if (!des.value) {
    alert("izoh kiritilishi shart");
    des.focus();
    des.style.outlineColor = "red";
  } else {
    des.style.outlineColor = "blue";
  }
  if (des.value.trim().length < 3) {
    alert("izoh kamida 3ta harfdan iborat bulishi shart");
    des.focus();
    des.style.outlineColor = "red";
    return false;
  } else {
    des.style.outlineColor = "blue";
  }

  // const passwordRegex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
  if (poosword.value.length >= 9) {
    alert("xato");
    return false;
  } else {
    poosword.style.outlineColor = "blue";
  }
  if (!poosword.value) {
    alert("parol kiritilishi shart");
    poosword.focus();
    poosword.style.outlineColor = "red";
  } else {
    poosword.style.outlineColor = "blue";
  }

  return true;
}
function getData() {
  let users = [];
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }
  return users;
}
button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (validate(name, surname, age, email, tel, nat, des, poosword)) {
      const user = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        email: email.value,
        tel: tel.value,
        nat: nat.value,
        des: des.value,
        poosword: poosword.value,
      };
      let u = getData();
      u.push(user);

      localStorage.setItem("users", JSON.stringify(u));
      form.reset();

      let card = createCard(user);
      wrapper.innerHTML += card;
    } else {
      console.log("validatsiyad utmadi");
    }
  });
function createCard(user) {
  return `
   <div class="card">
        <h3>${user.name}</h3>
        <h3>${user.surname}</h3>
        <h3>${user.age}</h3>
        <h3>${user.email}</h3>
        <h3>${user.tel}</h3>
        <h3>${user.nat}</h3>
        <h3>${user.des}</h3>
        <h3>${user.poosword}</h3>
      </div>  
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  let users = getData();
  users.forEach((user) => {
    let card = createCard(user);
    wrapper.innerHTML += card;
  });
});

// button &&
//   button.addEventListener("click", function () {
//     if (validate(

btn &&
  btn.addEventListener("click", function () {
    localStorage.clear("users");
  });
