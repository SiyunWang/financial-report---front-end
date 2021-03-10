export const getIncomeStatement = () => {
  const data = [
    {
      name: "Revenue",
      subCategories: [
        {
          name: "Services",
          values: [
            {
              month: "January, 2020",
              value: "$20,152"
            },
            {
              month: "February, 2020",
              value: "$25,345"
            },
            {
              month: "March, 2020",
              value: "$30,576"
            }
          ]
        },
        {
          name: "Subscriptions",
          values: [
            {
              month: "January, 2020",
              value: "$180,745"
            },
            {
              month: "February, 2020",
              value: "$201,082"
            },
            {
              month: "March, 2020",
              value: "$205,567"
            }
          ]
        },
        {
          name: "total",
          values: "$663,467"
        }
      ]
    },
    {
      name: "Costs of Revenue",
      subCategories: [
        {
          name: "Cloud Hosting Expense",
          values: [
            {
              month: "January, 2020",
              value: "$10,405"
            },
            {
              month: "February, 2020",
              value: "$11,478"
            },
            {
              month: "March, 2020",
              value: "$11,900"
            }
          ]
        },
        {
          name: "Customer Support Expense",
          values: [
            {
              month: "January, 2020",
              value: "$20,304"
            },
            {
              month: "February, 2020",
              value: "$20,890"
            },
            {
              month: "March, 2020",
              value: "$22,836"
            }
          ]
        },
        {
          name: "Professional Support Expense",
          values: [
            {
              month: "January, 2020",
              value: "$25,875"
            },
            {
              month: "February, 2020",
              value: "$27,958"
            },
            {
              month: "March, 2020",
              value: "$28,123"
            }
          ]
        },
        {
          name: "total",
          values: "$176,769"
        }
      ]
    },
    {
      name: "Sales and Marketing",
      subCategories: [
        {
          name: "Total Sales",
          values: [
            {
              month: "January, 2020",
              value: "$40,874"
            },
            {
              month: "February, 2020",
              value: "$45,567"
            },
            {
              month: "March, 2020",
              value: "$48,946"
            }
          ]
        },
        {
          name: "total",
          values: "$232,253"
        },
        {
          name: "Marketing Expense",
          values: [
            {
              month: "January, 2020",
              value: "$30,487"
            },
            {
              month: "February, 2020",
              value: "$32,476"
            },
            {
              month: "March, 2020",
              value: "$33,912"
            }
          ]
        }
      ]
    },
    {
      Name: "Net Profit",
      Values: "254445"
    }
  ];

  const processedData = preProcess(data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(processedData);
    });
  }, 500);
};

function preProcess(data) {
  const processedData = [];
  // iterate through each category
  for (let item of data) {
    // if it has subCategories
    if (item.subCategories) {
      // build a new category
      const newCategory = {};
      newCategory["category"] = item.name;
      newCategory["subCategories"] = [];
      for (let subCategory of item.subCategories) {
        if (subCategory.name !== "total") {
          const newSubCategory = {};
          newSubCategory["name"] = subCategory.name;
          for (let value of subCategory.values) {
            newSubCategory[value.month] = value.value;
          }
          newCategory["subCategories"].push(newSubCategory);
        } else {
          newCategory["total"] = subCategory.values;
        }
      }
      // push the new category to the result
      processedData.push(newCategory);
    }
  }
  processedData.push({ category: "Net Profit", total: "$254,445" });
  return processedData;
}
