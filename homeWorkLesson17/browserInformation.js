const container = document.querySelector(".container")

const browserName = navigator.appName;
const browserVersion = navigator.appVersion;
const platform = navigator.platform;
const userAgent = navigator.userAgent;

container.innerHTML = `<ul class="list-group">
                            <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            >
                            Имя браузера:
                            <span class="badge bg-primary rounded-pill">${browserName}</span>
                            </li>
                            <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            >
                            Версия браузера:
                            <span class="badge bg-primary rounded-pill">${browserVersion}</span>
                            </li>
                            <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            >
                            Платформа:
                            <span class="badge bg-primary rounded-pill">${platform}</span>
                            </li>
                            <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            >
                            User-Agent:
                            <span class="badge bg-primary rounded-pill">${userAgent}</span>
                            </li>
                        </ul>`;