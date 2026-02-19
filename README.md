# e2e Automation with Playwright

This is an end-to-end automation testing framework built with **Playwright** and **TypeScript** using the **Page Object Model (POM)** design pattern. The framework automates user registration and login workflows for the DFinance application.

---

## 🎯 Project Overview

This automation framework is designed to test user authentication workflows including:
- **User Registration**: Create new user accounts with auto-generated test data
- **User Login**: Verify login functionality with registered credentials
- **Data Management**: Save and retrieve user data from JSON files for test reusability

The framework follows industry best practices with:
- **Page Object Model (POM)** for maintainability
- **TypeScript** for type safety
- **Faker.js** for realistic test data generation
- **Serial test execution** to ensure proper test sequencing

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Playwright** | ^1.58.1 | Web automation framework |
| **TypeScript** | Latest | Type-safe programming language |
| **Node.js** | latest | Runtime environment |
| **Faker.js** | ^10.2.0 | Test data generation |


---

## 📦 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### Setup Steps

1. **Clone or navigate to the project directory**
   ```bash
   git clone repoLink
   cd e2e_Automation-with-Playwright
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

---

## ⚙️ Configuration

The `playwright.config.ts` file contains the following configurations:

### Key Settings:

| Setting | Value | Description |
|---------|-------|-------------|
| **testDir** | `./tests` | Location of test files |
| **headless** | `false` | Run tests in headed mode (visible browser) |
| **timeout** | `40000ms` | Test timeout |
| **browser** | Chromium | Primary browser for testing |
| **workers** | 1 | Run tests serially |
| **retries** | 1 | Retry failed tests once on CI |
| **reporter** | HTML | Generate HTML test reports |
| **slowMo** | 1000ms | Slow down action execution for visibility |
| **screenshot** | `only-on-failure` | Capture screenshots on test failure |
| **video** | `on-first-retry` | Record video on first retry |
| **trace** | `on-first-retry` | Collect trace on first retry |

---

## 🚀 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests in UI Mode (Recommended for Development)
```bash
npx playwright test --ui
```

### Run Specific Test File
```bash
npx playwright test tests/testRunner.ts
```

### Run with Specific Browser
```bash
npx playwright test --project=chromium
```

### Debug Tests
```bash
npx playwright test --debug
```

### View HTML Test Report
```bash
npx playwright show-report
```



## ✨ Project Features
1. **Page Object Model (POM)**
2. **Test Data Management**
3. **User Model & Types**
4. **Utility Functions**
5. **Comprehensive Test Reporting**



## 🐛 Troubleshooting

### Tests Not Running
- Ensure all dependencies are installed: `npm install`
- Verify Playwright browsers are installed: `npx playwright install`

### Timeout Issues
- Increase timeout in `playwright.config.ts`
- Check network connectivity to the application URL

### Data File Not Found
- Verify `resources/UserData.json` exists
- Ensure file path is correct in utility functions

### Browser Not Launching
- Check if port 5900+ is available
- Update Playwright: `npm install @playwright/test@latest`

---

## 📚 Best Practices

1. **Use Page Objects**: Encapsulate page interactions in Page classes
2. **Generate Dynamic Data**: Use Faker.js for realistic test data
3. **Serial Execution**: Use `test.describe.serial()` for dependent tests
4. **Store Test Data**: Persist data for cross-test validation
5. **Review Reports**: Check HTML reports after test runs

---

## 🤝 Contributing

Feel free to extend this framework with:
- Additional test scenarios
- More page objects
- Enhanced utility functions
- Integration with CI/CD pipelines

---


## 📞 Support

For issues, questions, or suggestions, please review the [Playwright Documentation](https://playwright.dev) or check the project configuration files.

---

