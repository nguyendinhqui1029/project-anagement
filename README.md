# ProjectAnagement

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


// Mô tả dự án:
+ Đây là dự án phần mền quản lý quy trình phát triển phần mềm. Phần mềm quản lý các bộ phận như:
  + Bộ phận lên kế hoạch (Planner): Đây là nhóm viết yêu cầu phần mềm và thiết kế giao diên.
  + Bộ phận quản lý dự án (Project manager): Chuyên quản lí về thành viên trong dự án, tiến độ công việc, phân bổ nhiêmj vụ và lên kế hoạch.
  + Bộ phận Frontend: Nhận yêu cầu và phát triển phần mềm phía giao diện
  + Bộ phận Backend: Nhận yêu cầu và phát triền API.
  + Bộ phận QA: Kiểm thử phần mềm.
Sau đây là một số tính năng cần thiết:
  + Màn hình login và phân quyền.
  + Dashboard để theo dõi tình hình phát triển của dự án.
  + Tính năng retro spective theo thời gian PM setup (2tuần/lần, 3tuần/lần).
  + Tính năng book phòng hợp và dùng AI để tổng hợp lại nội dung cuộc hợp.
  + Tính năng tạo timeline công việc cho các thành viên. có thể kéo thả, view, search, group
  + Tính năng kiểm tra commit code của dev và chuyển status của ticket. Mỗi ticket có phần todo list nếu như trong commit có nôi dung đó todo list tự động check và tính tỉ lệ phần trăm hoành thành và cập nhật report.
  + Tính năng tạo và quản lí ticket
  + Tính năng tạo, quản lí và run test case ( Phần này phục vụ cho team QA)

bên trên là ý tưởng sơ bộ của tôi bạn hay dự vào yêu cầu trên viết lại ý tưởng và đưa ra những menu cần thiết, những nội dung bạn thấy cần thiết cho phần dashboard và quản lí task. mở rộng thêm mỗi người có thể tham gia nhiều dự án
  Tận dụng AI nhiều nhất có thể. Mỗi công ty có nhiều dự án và mỗi người có thể tham gia nhiều dự án hãy thiết kế để đáp ứng điều này