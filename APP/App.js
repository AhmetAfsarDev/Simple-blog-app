const App = document.querySelector(".App");
const darkModeBtn = document.querySelector("#theme-toggle-btn");
const contentCards = document.querySelectorAll(".card");
const pageHome = document.querySelector(".page-home");
const pageMail = document.querySelector(".page-mail");
const pageInfo = document.querySelector(".page-info");
const pageCopyright = document.querySelector(".page-copyright");
const pageProfile = document.querySelector(".page-profile");
const pageBlog = document.querySelector(".page-blog");
const sidebarButtons = document.querySelectorAll(".sidebar-link");
const contentContainer = document.querySelector(".content-container");
const infombutton = document.querySelector(".infombutton");
const Singinwrapper = document.querySelector(".Sing-in-wrapper");
const Signininputwrapper = document.querySelector(".Sign-in-input-wrapper");
const signupinputwrapper = document.querySelector(".sign-up-input-wrapper");
const NSignupbtn = document.querySelector(".N-Sign-up-btn");
const NSigninbtn = document.querySelector(".N-Sign-in-btn");
const btn = document.querySelector(".N-Sign-in-btn");
const Signupmailinput = document.querySelector(".Sign-up-mail-input");
const Signupusernameinput = document.querySelector(".Sign-up-username-input");
const Signuppasswordinput = document.querySelector(".Sign-up-password-input");
const Signupbutton = document.querySelector(".Sign-up-button");
const Singinbutton = document.querySelector(".Sing-in-button");
const UsernameorMailinput = document.querySelector(".Username-or-Mail-input");
const Passwordinput = document.querySelector(".Password-input");
const Signupcontainer = document.querySelector(".Sign-up-container");
const skeleton = document.querySelector(".skeleton");
const signupv = document.querySelector(".sign-up-v");
const cardusername = document.querySelector(".card-username");
const Hcardusername = document.querySelector(".H-card-username");
const Mcardusername = document.querySelector(".M-card-username");
const PUsernameinfo = document.querySelector(".P-Usernameinfo");
const PMailinfo = document.querySelector(".P-Mail-info");
const Usermailnameprint = document.querySelector(".User-mail-name-print");
const navprofilename = document.querySelector(".nav-profil-name");
const Sendingmails = document.querySelector(".Sending-mails");
const mailform = document.querySelector(".mail-form");
const Mcardcontent = document.querySelector("#M-card-content");
const pagemail = document.querySelector(".page-mail");
const Maillistcontain = document.querySelector(".Maillistcontain");
const pagemailcard = document.querySelector("#Page-mail-card");
const MLPrwbtn = document.querySelector(".ML-Prw-btn");
const sendermail = document.querySelector(".sender-mail");
const Mailcontent = document.querySelector(".Mail-content");
const Maillistcontainer = document.querySelector(".Mail-list-container");
const PUsernameinfo2 = document.querySelector(".P-Usernameinfo2");
const PT=document.querySelector(".PT");
PT.textContent="Mysphere";

const mail = [];
const username = [];
const password = [];
const mailvalue = "";

signupinputwrapper.remove();
App.remove();
signupv.remove();
Maillistcontain.remove();

const Supf = () => {
    Signininputwrapper.remove();
    Singinwrapper.appendChild(signupinputwrapper);
};

const SignF = () => {
    signupinputwrapper.remove();
    Singinwrapper.appendChild(Signininputwrapper);
};

NSignupbtn.addEventListener("click", Supf);
btn.addEventListener("click", SignF);

const SignUpF = () => {
    mail.push(Signupmailinput.value);
    username.push(Signupusernameinput.value);
    password.push(Signuppasswordinput.value);

    const usermailadress = JSON.stringify(mail);
    const usernameData = JSON.stringify(username);
    const userpassword = JSON.stringify(password);

    localStorage.setItem("usermails", usermailadress);
    localStorage.setItem("usernames", usernameData);
    localStorage.setItem("userpassword", userpassword);

    signupinputwrapper.appendChild(signupv);

    Signupusernameinput.value = "";
    Signuppasswordinput.value = "";
    Signupmailinput.value = "";
};

Signupbutton.addEventListener("click", SignUpF);

const SigninF = () => {
    signupv.remove();

    const maildata = localStorage.getItem("usermails");
    const mailarray = maildata ? JSON.parse(maildata) : [];
    const usernamedata = localStorage.getItem("usernames");
    const usernamearray = usernamedata ? JSON.parse(usernamedata) : [];
    const passworddata = localStorage.getItem("userpassword");
    const passwordarray = passworddata ? JSON.parse(passworddata) : [];

    for (let i = 0; i < mailarray.length; i++) {
        for (let x = 0; x < usernamearray.length; x++) {
            if (
                mailarray[i] === UsernameorMailinput.value ||
                usernamearray[x] === UsernameorMailinput.value
            ) {
                for (let w = 0; w < passwordarray.length; w++) {
                    if (passwordarray[w] === Passwordinput.value) {
                        cardusername.textContent = usernamearray[x];
                        Hcardusername.textContent = usernamearray[x];
                        Mcardusername.textContent = usernamearray[x];
                        navprofilename.textContent = usernamearray[x];
                        Usermailnameprint.value = usernamearray[x];

                        UsernameorMailinput.value = "";
                        Passwordinput.value = "";

                        Signupcontainer.remove();
                        skeleton.appendChild(App);


                        pageBlog.remove();
                        pageMail.remove();
                        pageInfo.remove();
                        pageCopyright.remove();
                        pageProfile.remove();

                        for (let i = 0; i < sidebarButtons.length; i++) {
                            const Openpage = () => {


                                pageHome.remove();
                                pageBlog.remove();
                                pageMail.remove();
                                pageInfo.remove();
                                pageCopyright.remove();
                                pageProfile.remove();



                                if (sidebarButtons[i].id === "nav-home") {
                                    PT.textContent="Ana sayfa / Mysphere";
                                    contentContainer.appendChild(pageHome);
                                }
                                if (sidebarButtons[i].id === "nav-blog") {
                                    PT.textContent="Sphere'lar / Mysphere";
                                    contentContainer.appendChild(pageBlog);
                                }
                                if (sidebarButtons[i].id === "nav-mail") {
                                    PT.textContent="Mail / Mysphere";

                                    contentContainer.appendChild(pageMail);
                                    Usermailnameprint.value = usernamearray[x];
                                    
                                    const Maillist = () => {
                                    PT.textContent="Gonderilenler / Mysphere";

                                        pagemailcard.remove();
                                        pagemail.appendChild(Maillistcontain);
                                    };

                                    const Pagemailopen = () => {
                                    PT.textContent="Mail / Mysphere";

                                        Maillistcontain.remove();
                                        pageMail.appendChild(pagemailcard);
                                    };

                                    MLPrwbtn.addEventListener("click", Pagemailopen);
                                    Sendingmails.addEventListener("click", Maillist);
                                }
                                if (sidebarButtons[i].id === "nav-info") {
                                    PT.textContent="Hakkımızda / Mysphere";

                                    contentContainer.appendChild(pageInfo);
                                }
                                if (sidebarButtons[i].id === "nav-copyright") {
                                    PT.textContent="Telif hakları / Mysphere";

                                    contentContainer.appendChild(pageCopyright);
                                }
                                if (sidebarButtons[i].id === "nav-profile") {
                                    PT.textContent="Profil / Mysphere";

                                    contentContainer.appendChild(pageProfile);
                                    document.querySelector(".P-Usernameinfo").textContent = usernamearray[x];
                                }
                            };

                            sidebarButtons[i].addEventListener("click", Openpage);
                        }

                        infombutton.addEventListener("click", () => {
                            pageHome.remove();
                            pageBlog.remove();
                            pageInfo.remove();
                            pageCopyright.remove();
                            pageProfile.remove();
                            contentContainer.appendChild(pageMail);
                        });
                    }
                }
            }
        }
    }
};

let ul = document.createElement("ul");
Maillistcontainer.appendChild(ul);
let div2 = document.createElement("div");
div2.classList.add("Mail-list");

const SendingmailF = () => {
    const mailcontentdb = [];
    mailcontentdb.push(Mailcontent.value);

    const getmailcontent = JSON.stringify(mailcontentdb);
    localStorage.setItem("E-mail-contentss", getmailcontent);
    const data = localStorage.getItem("E-mail-contentss");

    let li = document.createElement("li");
    let div = document.createElement("div");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span2");
    let p = document.createElement("p");

    const maildata = JSON.parse(data);
    span2.classList.add("Title-mail-content");
    div.classList.add("mail-title-content");
    p.classList.add("Mail-list-c");

    span1.textContent = "Mail konusu:";
    span2.textContent = " : " + document.querySelector(".cab").value;
    p.textContent = maildata;

    span1.appendChild(span2);
    div.appendChild(span1);
    li.appendChild(div);
    li.appendChild(p);
    ul.appendChild(li);
    div2.appendChild(ul);
    Maillistcontainer.appendChild(div2);
};


sendermail.addEventListener("click", SendingmailF);
Singinbutton.addEventListener("click", SigninF);