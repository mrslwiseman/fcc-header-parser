## Header Parser Microservice

Part of a series of FCC Back end projects.
- Parses request headers. Returns:
  - IP
  - Preferred Language
  - User Agent Info 

### User Stories
- I can get the IP address, language and operating system for my browser.

---

### Example Usage
Visit: 
```http://whois-this.herokuapp.com/```

### Example Output:
```{ "ip": "10.11.169.30", "language": "en-AU", "user_agent": "Macintosh Intel Mac OS X 10_12_0" }```

---

### Takeaways from this project
- Gain familiarity with HTTP Headers and Express request methods
- Will need to look into how to create mock headers for testing