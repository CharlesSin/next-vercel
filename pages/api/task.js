export default async (req, res) => {
    const { method } = req;
  
    // POST Method
    if (method === "POST") {
      try {
        res
          .status(201)
          .json({ message: "This is POST Method" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  
    // GET Method
    if (method === "GET") {
      try {
        res.status(200).json({ message: "This is GET Method" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }

    // PUT Method
    if (method === "PUT") {
      try {
        res
          .status(201)
          .json({ message: "This is PUT Method" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  
    // DELETE Method
    if (method === "DELETE") {
      try {
        res.status(200).json({ message: "This is DELETE Method" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  };