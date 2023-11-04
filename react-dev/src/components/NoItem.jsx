function YourComponent({ filteredRestaurant }) {
    if (filteredRestaurant.length === 0) {
          return <h1>no Item found</h1>;
    }
}

export default YourComponent;