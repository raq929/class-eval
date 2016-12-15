db.users.update(
  {
    email: "r@r.com"
  },
  {
    $set: { isAdmin: true}
  }
)
