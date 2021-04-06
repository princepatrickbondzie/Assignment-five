const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.allBooks);
router.get("/:id", bookController.getBook);
router.post("/", bookController.createBook);
router.patch("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;