const app = new Vue({
  el: "#app",
  data: {
    apiurl: "https://flynn.boolean.careers/exercises/api/random/mail",
    emails: [],
    numberOfEmails: 10,
  },
  methods: {
    getEmails() {
      for (let i = 0; i < this.numberOfEmails; i++) {
        axios.get(this.apiurl).then((answer) => {
          const email = answer.data.response;
          this.emails.push(email);
        });
      }
    },
  },
  created() {
    this.getEmails();
  },
});
