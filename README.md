# 🎭 Playwright Automation Concepts & Execution Guide

This repository demonstrates hands-on implementation of **Playwright automation concepts**, covering real-world UI interactions, test execution strategies, assertions, data-driven testing, and advanced browser handling.

It serves as a practical reference for mastering Playwright automation for scalable test framework development.

---

## 🎯 Purpose

✔ Learn Playwright automation from fundamentals to advanced concepts
✔ Practice real-world UI automation scenarios
✔ Implement robust locator strategies & assertions
✔ Handle frames, windows, alerts, and dynamic elements
✔ Perform data-driven testing using external files
✔ Understand execution control using hooks, tags, and contexts

---

## 📁 Project Structure

```
src/
 ├── locator strategies & element handling
 ├── frame & window handling
 ├── mouse & keyboard interactions
 ├── dropdown & file upload handling
 ├── waits & synchronization
 ├── shadow DOM & pseudo elements
 ├── scrolling & screenshot capture
 └── advanced browser interactions

tests/
 ├── assertions & test structure
 ├── hooks & lifecycle management
 ├── browser context handling
 ├── data-driven testing examples
 ├── CSV / JSON / Excel data reading
 ├── Faker data generation
 └── tagging & execution control
```

---

## 🧪 Playwright Concepts Covered

### 🔹 Locator Strategies

* `getByRole()` and accessibility-first locators
* text-based & attribute locators
* CSS vs XPath usage
* filtering & chained locators

### 🔹 Element Interaction

* click, double-click, right-click
* drag & drop
* dropdown handling
* file upload
* element visibility & enable checks
* pseudo & shadow DOM elements

### 🔹 Frames & Windows

* iframe handling
* nested frames
* new window & tab handling
* multi-window switching
* authentication popups

### 🔹 Browser & Context Handling

* browser contexts
* session isolation
* multiple contexts & pages

### 🔹 Mouse & Keyboard Actions

* hover & move to element
* tab navigation
* scrolling actions

### 🔹 Alerts & Dialogs

* JS alerts & confirmations
* authentication popups

---

## ✅ Assertions & Validation

This project demonstrates:

✔ visibility & state assertions
✔ text & attribute validation
✔ element count verification
✔ page URL & title validation
✔ style & CSS property validation

Example:

```ts
await expect(locator).toBeVisible();
await expect(locator).toHaveText("Success");
```

---

## ⏱ Waits & Synchronization

* auto-waiting behavior
* explicit waits
* wait for selectors
* wait for load states
* wait for network idle

---

## 📊 Data-Driven Testing

### Supported Sources

✔ JSON
✔ CSV
✔ Excel (XLS/XLSX)
✔ Faker generated data

### Examples Included

* JSON driven tests
* CSV data provider
* Excel-driven execution
* dynamic test data generation

---

## 🔄 Hooks & Test Lifecycle

Demonstrates usage of:

* `beforeAll`
* `beforeEach`
* `afterEach`
* `afterAll`
* hooks inside `describe`

Benefits:

✔ reusable setup
✔ cleaner test flow
✔ improved maintainability

---

## 🏷 Tags & Test Execution Control

Run specific tests using tags:

```bash
npx playwright test --grep @smoke
```

Use cases:

✔ smoke tests
✔ regression suites
✔ environment-specific execution

---

## 🌐 Browser Context & Navigation

Includes:

* back & forward navigation
* context isolation
* multiple browser sessions

---

## 📸 Screenshots & Debugging

* capturing screenshots
* debugging failures
* trace & execution analysis

---

## ▶ Running Tests

### Install dependencies

```bash
npm install
```

### Install browsers

```bash
npx playwright install
```

### Run all tests

```bash
npx playwright test
```

### Run in headed mode

```bash
npx playwright test --headed
```

### Run tagged tests

```bash
npx playwright test --grep @smoke
```

---

## 🧠 Skills Strengthened

✔ Advanced Playwright automation
✔ Robust locator strategies
✔ Data-driven testing implementation
✔ Browser & context handling
✔ Test lifecycle management
✔ Debugging & synchronization
✔ Scalable automation design

---

## 🎯 Ideal For

* Automation Test Engineers
* Playwright learners
* QA professionals transitioning from Selenium
* Developers learning modern UI automation
* Interview preparation & hands-on practice

---

## 👨‍💻 Author

**Sai Krishna**

Automation enthusiast focused on mastering Playwright and building scalable test solutions.

---

## ⭐ Support

If you find this repository useful, consider giving it a ⭐!

---
