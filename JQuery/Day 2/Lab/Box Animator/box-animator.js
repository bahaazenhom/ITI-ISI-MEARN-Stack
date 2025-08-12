$(".box").animate(
  {
    width: "300px",
    height: "300px",
    left: "600px",
  },
  2000,
  function () {
    $(this).animate(
      {
        width: "100px",
        height: "100px",
        top: "500px",
      },
      2000,
      function () {
        $(this).animate(
          {
            width: "300px",
            height: "300px",
            left: "0px",
          },
          2000,
          function () {
            $(this).animate(
              {
                width: "100px",
                height: "100px",
                top: "0px",
              },
              2000
            );
          }
        );
      }
    );
  }
);
