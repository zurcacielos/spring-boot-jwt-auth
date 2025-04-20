
# springboot-jwt-monorepo

## 📦 Project Structure

- `backend-springboot/`: Spring Boot 3.3.3 REST API with JWT, MySQL, and Docker Compose
- `frontend-nextjs/`: Next.js frontend to register/login and test all endpoints

## 🚀 Usage

1. Run MySQL:
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

4. Test endpoints:
   - `/auth/register`
   - `/auth/login`
   - `/public`
   - `/user` (requires JWT with USER role)
   - `/admin` (requires JWT with ADMIN role)
