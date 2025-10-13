import Card from "./components/Card.jsx";

function App() {
  const jobOpenings = [
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      name: "Microsoft",
      datePosted: "5 days ago",
      post: "Cloud Security Engineer",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$120/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/GxVOq9xuqtiB4Tpa8JJxeWKumoDP0A9x9UXm7yU0e4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
      name: "Amazon",
      datePosted: "10 days ago",
      post: "UI/UX Designer",
      tag1: "Part time",
      tag2: "Mid level",
      pay: "$90/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/7oRMZ5ifuTywDSOtzsemEMjW7jsmHMLZeDMZPLycObU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
      name: "Google",
      datePosted: "2 weeks ago",
      post: "Cyber Security Analyst",
      tag1: "Full time",
      tag2: "Junior level",
      pay: "$110/hr",
      location: "Gurgaon, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/0bbzyBsMM03oOdswdoM3gKufevOE1CUbkjW3atyp8r4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3Lzhj/LzQwL2E3OGM0MDZl/NGFkOTVmNjhiZDhi/MDE0NTgyZWYzZWNl/LmpwZw",
      name: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$130/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/bxAZ7ZE5s7Dx0JD9EHHbw2kIQVai1R9b6MqwgPBH9fI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW5ldGZsaXgtaWNv/bi1zdmctZG93bmxv/YWQtcG5nLTg3MTU4/MzEucG5nP2Y9d2Vi/cCZ3PTEyOA",
      name: "Netflix",
      datePosted: "1 month ago",
      post: "Backend Engineer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$100/hr",
      location: "Remote, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/w-1QfP1d6gjnvhuZpaxwXtA5BYbf6d-sl7kJMh9vcqU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbWV0YS9tZXRh/X1BORzUucG5n",
      name: "Meta",
      datePosted: "2 months ago",
      post: "Frontend Developer",
      tag1: "Part time",
      tag2: "Junior level",
      pay: "$85/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      name: "LinkedIn",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$140/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/FMyuvD4za2Qgl7TAgP3s88RNg4FeRt5AkFhzp7MqDok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21t/dW5pdHkuYWRvYmUu/Y29tL2h0bWwvQDdE/RUYxNUNGM0E0NTIx/MTdFNUExQkE1RjEz/RTM4QTE2L2Fzc2V0/cy9BZG9iZV9sb2dv/LnN2Zw",
      name: "Adobe",
      datePosted: "6 days ago",
      post: "Product Designer",
      tag1: "Part time",
      tag2: "Mid level",
      pay: "$95/hr",
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/RzGt_8XovulpkRIuxCoPAG-sPySw34NWg0F-sTgnP5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcwL2M0/LzA2LzcwYzQwNjY2/NWEyNzFiOWU3Nzg5/MzI0ODc1OGVlNGQ5/LmpwZw",
      name: "Tesla",
      datePosted: "10 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$150/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/M3O0-fF3Bje6g_aXjJX_wlO1GicQ7iOot5LulkQYAWg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWdp/c3RyeS5ucG1taXJy/b3IuY29tL0Bsb2Jl/aHViL2ljb25zLXN0/YXRpYy1wbmcvbGF0/ZXN0L2ZpbGVzL2Rh/cmsvbnZpZGlhLWNv/bG9yLnBuZw",
      name: "NVIDIA",
      datePosted: "8 days ago",
      post: "AI Research Intern",
      tag1: "Internship",
      tag2: "Entry level",
      pay: "$70/hr",
      location: "Pune, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, index) {
        return (
          <div key={index}>
            <Card
              company={elem.name}
              post={elem.post}
              datePosted={elem.datePosted}
              logo={elem.brandLogo}
              time={elem.tag1}
              level={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
