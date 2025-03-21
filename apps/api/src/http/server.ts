import { env } from '@e-commerce/env'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import fastify from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { errorHandler } from './error-handler'
import { authenticateWithGithub } from './routes/auth/authenticate-with-github'
import { getProfile } from './routes/auth/get-profile'
import { getCategories } from './routes/category/get-categories'
import { getCategory } from './routes/category/get-category'
import { getProduct } from './routes/products/get-product'
import { getProducts } from './routes/products/get-products'
import { addToWishlist } from './routes/wishlist/add-to-wishlist'
import { getWishlist } from './routes/wishlist/get-wishlist'
import { removeAllFromWishlist } from './routes/wishlist/remove-all-wishlist'
import { removeFromWishlist } from './routes/wishlist/remove-from-wishlist'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.setErrorHandler(errorHandler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'E-commerce',
      description: 'Full-stack e-commerce platform by Univinte.',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

app.register(authenticateWithGithub)
app.register(getProfile)

app.register(getCategories)
app.register(getCategory)

app.register(getProducts)
app.register(getProduct)

app.register(getWishlist)
app.register(addToWishlist)
app.register(removeFromWishlist)
app.register(removeAllFromWishlist)

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP server running!')
})
