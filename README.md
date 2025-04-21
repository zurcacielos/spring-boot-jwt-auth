
# springboot-jwt-monorepo

## 📦 Project Structure

- `backend-springboot/`: Spring Boot 3.3.3 REST API with JWT, MySQL, and Docker Compose
- `frontend-nextjs/`: Next.js frontend to register/login and test all endpoints

## 🚀 Usage

# Still in developmnt

1. Run MySQL:

Use any mysql instance and specify the environment variables in your environment, or IDE.

DB_NAME=auth_db;DB_PASSWORD=your_password_here;DB_USERNAME=root;DB_HOST=localhost:3306

If you want to use the one on the container.

   ```bash
   cd backend-springboot
   docker-compose up
   ```
   


2. Start backend:
   ```bash
   ./mvnw spring-boot:run
   ```

3. Start frontend:
   ```bash
   cd ../frontend-nextjs
   npm install
   npm run dev
   ```
4. You can go to
   http://localhost:3000/

And register either a user or an admin, with username password, for example admin/admin.

After registration, you can 
4. Test endpoints:
   - `/auth/register`
   - `/auth/login`
   - `/public`
   - `/user` (requires JWT with USER role)
   - `/admin` (requires JWT with ADMIN role)
