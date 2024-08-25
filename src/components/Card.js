import dp from "../assets/dp.jpg";
import getData from "../api/getData";

const resource = getData(
  // "https://run.mocky.io/v3/7f89db3f-1f93-444c-8c42-b84f653a073e"
  'https://dummyjson.com/users'
);

const Card = () => {
  const data = resource.read();
  console.log({ data });
  return data.map((user, i) => (
    <div className="card" key={i}>
      <div className="img-holder">
        <img src={dp} alt="user avater" />
      </div>
      <div className="desc">
        <span>
          <h3>{user.name}</h3>
          <p>The Pastry maker</p>
        </span>
        <p className="bio">
          Money trees is the perfect place for shade and that's just how i feel.
          Nevertheless, the best things come from living outside of your comfort
          zone.
        </p>
      </div>
    </div>
  ));
};

export default Card;
