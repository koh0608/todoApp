import axios from "axios";

const HomePage: React.FC<any> = () => {
  return (
    // <form>
    //   <input type="text" placeholder="email" style={{ border: "1px solid black" }} />
    //   <br />
    //   <br />
    //   <input type="text" placeholder="password" style={{ border: "1px solid black" }} />
    //   <br />
    // </form>
    <>
      <button onClick={getUsers} style={{ color: "red" }}>
        Get Users
      </button>
      <br />
      <button onClick={createTodo}>Create Todo</button>
      <br />
      <button onClick={editTodoTitle}>Edit Todo Title</button>
      <br />
      <button onClick={editTodoTag}>Edit Todo Tag</button>
      <br />
      <button onClick={deleteTodoById}>Delete Todo by ID</button>
      <br />
      <button onClick={deleteAllTodo}>Delete All Todo</button>
      <br />
      <button onClick={editTodoLink}>Edit Todo Link</button>
      <br />
      <button onClick={editTodo}>Edit Todo Multi Data</button>
    </>
  );
};

// function getUsers() {
//   axios({
//     method: "get",
//     url: "http://localhost:3000/todo/getAllTodo",
//     params:{
//       _limit:3
//     }
//   })
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err));
// }
function getUsers() {
  axios
    .get("http://localhost:3000/todo/getAllTodo")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}

function createTodo() {
  axios
    .post("http://localhost:3000/todo/createTodo", {
      title: "test todo form browser",
      link: "https://www.google.com/",
      tag: "DONE",
      dueDate: "2022-04-19",
      creator: 1
    })

    .then(res => console.log(res))
    .catch(err => console.log(err));
}

// CORS ERROR
function editTodoTitle() {
  axios
    // /5 = param (id)
    .patch("http://localhost:3000/todo/editTodoTitle/5", {
      title: "edit test todo 5 from browser 2"
    })

    .then(res => console.log(res))
    .catch(err => console.log(err));
}

function editTodoTag() {
  axios
    // /5 = param (id)
    .patch("http://localhost:3000/todo/editTodoTag/5", {
      tag: "DONE"
    })

    .then(res => console.log(res))
    .catch(err => console.log(err));
}

function editTodoLink() {
  axios
    // /8 = param (id)
    .patch("http://localhost:3000/todo/editTodoLink/8", {
      link: "www.google.com"
    })

    .then(res => console.log(res))
    .catch(err => console.log(err));
}

//Edit Multi Data
function editTodo() {
  axios
    // /8 = param (id)
    // all data is optional (?) if null get current data EXAMPLE: link: ""
    .put("http://localhost:3000/todo/editTodo/8", {
      title: "test todo edit from browser",
      tag: "OPEN",
      dueDate: "2022-04-20"
    })

    .then(res => console.log(res))
    .catch(err => console.log(err));
}

function deleteTodoById() {
  axios
    // /6 = param (id)
    .delete("http://localhost:3000/todo/deleteTodoById/6")
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

function deleteAllTodo() {
  axios
    // /3 = param (UserId) creator
    .delete("http://localhost:3000/todo/deleteAllTodo/3")
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

// export const getServerSideProps: GetServerSideProps = async (_context): Promise<{ props: Props }> => {
//   try {
//     const home = await apolloClient.query<Gql.GetCurrentHomeBannerQuery>({ query: Gql.GetCurrentHomeBannerDocument });
//     const ads = await apolloClient.query<Gql.GetCurrentAdsBannerQuery>({ query: Gql.GetCurrentAdsBannerDocument });
//     return {
//       props: {
//         homeBanner: home.data.getCurrentHomeBanner,
//         adsBanner: ads.data.getCurrentAdsBanner
//       }
//     };
//   } catch (e) {
//     return { props: {} };
//   }
// };

export default HomePage;
