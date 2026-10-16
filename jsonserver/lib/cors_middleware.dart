import 'package:shelf/shelf.dart';

/// Allows browser clients on other origins to call this server.
///
/// Responds to OPTIONS preflight requests directly and adds the
/// Access-Control-* headers to every other response.
Middleware corsHeaders() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
  };

  return (Handler innerHandler) {
    return (Request request) async {
      if (request.method == 'OPTIONS') {
        return Response.ok('', headers: headers);
      }

      final response = await innerHandler(request);
      return response.change(headers: headers);
    };
  };
}
