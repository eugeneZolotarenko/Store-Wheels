import ItemComponent from "../components/Item";
import UserComponent from "../components/User";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
  id: "ABCD123",
  title: "An Item",
  price: 5000,
  description: "This is cool item",
  image: "dog.jpg",
  largeImage: "largedog.jpg"
};

describe("<Item/>", () => {
  it("renders and matches the snapshot", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  // it("renders the image properly", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //   const img = wrapper.find("img");
  //   expect(img.props().src).toBe(fakeItem.image);
  //   expect(img.props().alt).toBe(fakeItem.title);
  // });
  // it("renders PriceTag and title properly", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //   const PriceTag = wrapper.find("PriceTag");
  //   console.log(PriceTag.debug());
  //   expect(PriceTag.children().text()).toBe("$50");
  //   expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
  // });
});
