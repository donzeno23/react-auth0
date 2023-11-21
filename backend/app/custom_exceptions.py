from typing import Any, Dict, Optional
from typing_extensions import Annotated, Doc
from fastapi import HTTPException, status


class BadCredentialsException(HTTPException):
    def __init__(self):
        super().__init__(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Bad credentials"
        )

class PermissionDeniedException(HTTPException):
    def __init__(self):
        super().__init__(
            status_code=status.HTTP_403_FORBIDDEN, detail="Permission denied"
        )

class RequiresAuthenticationException(HTTPException):
    def __init__(self, status_code: int, detail: Any = None, headers: Dict[str, str] | None = None) -> None:
        super().__init__(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Requires authentication", headers=headers
        )

class UnableCredentialsException(HTTPException):
    def __init__(self) -> None:
        super().__init__(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="Unable to verify credentials",
        )