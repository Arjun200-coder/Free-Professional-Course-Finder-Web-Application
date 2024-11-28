
function findCourses() {
    const topic = document.getElementById("topic").value;
    const filter = document.getElementById("filter").value;
  
    let pageUrl = "";
  
    // Define URL based on selection
    if (topic === "Information_Technology" && filter === "free") {
      pageUrl = "infomation.html";
    } else if (topic === "Information_Technology" && filter === "paid") {
      pageUrl = "infomation_paid.html";
    } else if (topic === "Business_&_Entrepreneurship" && filter === "free") {
      pageUrl = "business.html";
    } else if (topic === "Business_&_Entrepreneurship" && filter === "paid") {
      pageUrl = "business_paid.html";
    } else if (topic === "Healthcare_&_Wellness" && filter === "free") {
      pageUrl = "health.html";
    } else if (topic === "Healthcare_&_Wellness" && filter === "paid") {
      pageUrl = "health_paid.html";
    } else if (topic === "Arts_&_Humanities" && filter === "free") {
        pageUrl = "art.html";
      } else if (topic === "Arts_&_Humanities" && filter === "paid") {
        pageUrl = "art_paid.html";
      }else if (topic === "Environmental_Studies" && filter === "free") {
        pageUrl = "enviromental.html";
      } else if (topic === "Environmental_Studies" && filter === "paid") {
        pageUrl = "enviromental_paid.html";
      }
  
    // Redirect to the relevant page
    if (pageUrl) {
      window.location.href = pageUrl;
    } else {
      alert("No courses found for the selected options.");
    }
  }