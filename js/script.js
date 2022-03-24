const app = new Vue({
  el: "#app",
  data: {
    apiurl: "https://flynn.boolean.careers/exercises/api/random/mail",
    emails: [],
    numberOfEmails: 10,
  },
  methods: {
    getEmails() {
      const tempEmails = [];

      for (let i = 0; i < this.numberOfEmails; i++) {
        axios.get(this.apiurl).then(function (answer) {
          const email = answer.data.response;
          tempEmails.push(email);
        });
      }

      this.emails = tempEmails;
      console.log(this.emails);
    },
  },
  created() {
    this.getEmails();
  },
});
